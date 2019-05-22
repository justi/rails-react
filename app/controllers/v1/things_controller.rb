class V1::ThingsController < ApplicationController
  def index

    json = [
        {
            name: 'some-thing',
            guid: '123-232-4342353432423'
        },
        {
            name: 'some-thing-else',
            guid: '123-232-43423534324234'
        }
    ]
    render json: json
  end
end
