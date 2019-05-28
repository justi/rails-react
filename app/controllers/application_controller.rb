class ApplicationController < ActionController::Base
  def to_bool(value)
    ActiveRecord::Type::Boolean.new.cast(value)
  end
end
